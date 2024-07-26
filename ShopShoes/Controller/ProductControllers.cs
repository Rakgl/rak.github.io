using System.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using ShopShoes.Entity;

namespace ShopShoes.Controller;

[ApiController]
[Route(template:"api/products")]
public class ProductControllers : ControllerBase
{
    private readonly IConfiguration _configuration;
    
    public ProductControllers(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    
    [HttpGet]
    public object GetProducts()
    {
        var products = new List<ProductEntity>();
        try
        {
            var connectionString = _configuration.GetConnectionString("Default");
            //Create Connect to sql server
            SqlConnection connection = new SqlConnection(connectionString);
            var sql = "SELECT * FROM tbl_products";
            SqlCommand command = new SqlCommand(sql, connection);
            connection.Open();

            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                var id = reader.GetInt32(reader.GetOrdinal("id"));
                var title = reader.GetString(reader.GetOrdinal("title"));
                var description = reader.GetString(reader.GetOrdinal("description"));
                var price = reader.GetString(reader.GetOrdinal("price"));
                var image = reader.GetString(reader.GetOrdinal("image"));
                var catId = reader.GetInt32(reader.GetOrdinal("cat_id"));
                
                
                var product = new ProductEntity();
                product.id = id;
                product.title = title;
                product.description = description;
                product.price = price;
                product.image = image;
                product.cat_id = catId;
                products.Add(product);
            }

        }
        catch (Exception ex)
        {
            var error = ex.Message;
        }
        return products;
    }
    
    //---------------------------------create
    [HttpPost("create")]
    public string CreateProduct([FromBody] ProductEntity request)
    {
        try
        {
            var connectionString = _configuration.GetConnectionString("Default");
            SqlConnection connection = new SqlConnection(connectionString);
            var sql = "INSERT INTO tbl_products(title,description, price,image,cat_id) VALUES (@title, @description, @price,@image,@cat_id)";
            SqlCommand command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@title", request.title);
            command.Parameters.AddWithValue("@description", request.description);
            command.Parameters.AddWithValue("@price", request.price);
            command.Parameters.AddWithValue("@image", request.image);
            command.Parameters.AddWithValue("@cat_id", request.cat_id);
            
            connection.Open();
            var rowAffected = command.ExecuteNonQuery();
            if (rowAffected > 0)
            {
                return "Product Create Successfully";
            }
            else
            {
                return "Error Creating Product";
            }
        }
        catch (Exception ex)
        {
            return $"Error Creating Product { ex.Message } ";
        }
        
    }
//-------------------------------------update 
    [HttpPut("update")]
    public string UpdateProduct([FromBody] ProductEntity request)
    {
        try
        {
            var connectionString = _configuration.GetConnectionString("Default");
            SqlConnection connection = new SqlConnection(connectionString);
            var sql = "UPDATE tbl_products SET title=@title , price=@price WHERE id=@id";
            SqlCommand command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@title", request.title);
            command.Parameters.AddWithValue("@price", request.price);
            command.Parameters.AddWithValue("@id", request.id);
            connection.Open();
            var rowaffected = command.ExecuteNonQuery();
            if (rowaffected > 0)
            {
                return "Product Updated successfully";
            }
            else
            {
                return "Can not update product";
            }
        }
        catch (Exception ex)
        {
            return $"Error Update Product {ex.Message} ";
        }
    }
//------------------------------------------------delete
    [HttpDelete("delete")]
    public string DeleteProduct([FromBody] ProductEntity request)
    {
        try
        {
            var connectionString = _configuration.GetConnectionString("Default");
            SqlConnection connection = new SqlConnection(connectionString);
            var sql = "DELETE FROM tbl_products WHERE id=@id ";
            SqlCommand command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@id", request.id);
            connection.Open();
            var rowaffected = command.ExecuteNonQuery();
            if(rowaffected > 0)
            {
                return "Delete Product Successfully";
            }
            else
            {
                return "Can not delete product";
            }

        }
        catch (Exception e)
        {
            return $"Delete Product fail {e.Message} ";
        }
    }
    //-------------------------------uplod-img
    [HttpPost(template: "upload")]
    public async Task<IActionResult> UploaFile(IFormFile file)
    {
        if (file == null || file.Length == 0)
        {
            return BadRequest("No File uploaded.");
        }

        var uploadFolderPath = "/Users/rak/Documents/upload-file";

        var filePath = Path.Combine(uploadFolderPath, file.FileName);
        var stream = new FileStream(filePath, FileMode.Create);
        await file.CopyToAsync(stream);
        return Ok(new { filePath });
    }
    
    //-------------------------------multi-upload
    [HttpPost(template: "uploads")]
    public async Task<IActionResult> UploadFiles(IFormFileCollection files)
    {
        if (files == null || files.Count == 0)
        {
            return BadRequest("No files uploaded.");
        }

        var uploadFolderPath = "/Users/rak/Documents/upload-file";
        var uploadedFiles = new List<string>();

        foreach (var file in files)
        {
            var filePath = Path.Combine(uploadFolderPath, file.FileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }
            uploadedFiles.Add(filePath);
        }

        return Ok(new { uploadedFiles });
    }
    
    [HttpGet(template: "List")]
    public async Task<IActionResult> GetProductForFe()
    {
        var products = new List <ProductEntity>();
        var strCon = _configuration.GetConnectionString("Default");
        SqlConnection conn = new SqlConnection(strCon);
        conn.Open();
        var sql = "SELECT *FROM tbl_products ORDER BY id DESC";
        SqlCommand command = new SqlCommand(sql, conn);
        SqlDataReader reader = command.ExecuteReader();
        while ( reader.Read())
        {
            var id = reader.GetInt32(reader.GetOrdinal("id"));
            var title = reader.GetString(reader.GetOrdinal("title"));
            var description = reader.GetString(reader.GetOrdinal("description"));
            var price = reader.GetString(reader.GetOrdinal("price"));
            var image = reader.GetString(reader.GetOrdinal("image"));
            var catId = reader.GetInt32(reader.GetOrdinal("cat_id"));
            var product = new ProductEntity();
            product.id = id;
            product.title = title;
            product.description = description;
            product.price = price;
            product.image = image;
            product.cat_id = catId;
            
            products.Add(product);
        }
        return Ok(products);
    }
}