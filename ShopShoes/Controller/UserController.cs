using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using ShopShoes.Entity;
using ShopShoes.Helper;

namespace ShopShoes.Controller;

[ApiController]
[Route(template:"api/users")]

public class UserController : ControllerBase
{
    private readonly IConfiguration _configuration;
    public UserController(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    
    [HttpPost(template: "create")]
    public string CreateUser([FromBody] UserEntity request)
    {
        var conString = _configuration.GetConnectionString("Default");
        SqlConnection conn = new SqlConnection(conString);
        conn.Open();
        var sql = "INSERT INTO " +
                  "tbl_user(first_name, last_name, email, username, password) " +
                  "VALUES (@first_name, @last_name, @email, @username, @password)";
        SqlCommand cd = new SqlCommand(sql, conn);
        cd.Parameters.AddWithValue("@first_name", request.first_name);
        cd.Parameters.AddWithValue("@last_name", request.last_name);
        cd.Parameters.AddWithValue("@email",  request.email);
        cd.Parameters.AddWithValue("@username", request.username);
        var helper = new GeneralHelper();
        var hashedPassword = helper.HashPassword(request.password);
        cd.Parameters.AddWithValue("@password", hashedPassword);

        var affectedRow = cd.ExecuteNonQuery();
        if (affectedRow > 0)
        {
            return "Succes to create user";
        }
        return "Fail to create user";
    }
    
    [HttpGet()]
    public object GetUsers()
    {
        var users = new List<UserEntity>();
        try
        {
            var connectionString = _configuration.GetConnectionString("Default");
            //Create Connect to sql server
            SqlConnection connection = new SqlConnection(connectionString);
            
            //Execute Sql Command
            var sql = "SELECT *FROM tbl_user";
            SqlCommand command = new SqlCommand(sql, connection);
            connection.Open();
            
            //Read data from each rows
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                //Read base collumn
                var id = reader.GetInt32(reader.GetOrdinal("id"));
                var firstName = reader.GetString(reader.GetOrdinal("first_name"));
                var lastName = reader.GetString(reader.GetOrdinal("last_name"));
                var email = reader.GetString(reader.GetOrdinal("email"));
                var username = reader.GetString(reader.GetOrdinal("username"));
                //Assign data into ProductEntity
                var user = new UserEntity();
                user.id = id;
                user.first_name = firstName;
                user.last_name = lastName;
                user.email = email;
                user.username = username;
                //Add Product into List
                users.Add(user);
            }

        }
        catch (Exception ex)
        {
            var error = ex.Message;
        }

        return users;
    }

    //------------------------------update
    [HttpPut("update")]
    public string UpdateUser([FromBody] UserEntity request)
    {
        try
        {
            var connectionString = _configuration.GetConnectionString("Default");
            SqlConnection connection = new SqlConnection(connectionString);
            connection.Open();
            var sql = "UPDATE tbl_user SET first_name=@first_name,  last_name=@last_name,   email=@email,  password=@password, username=@username WHERE id=@id;";
            SqlCommand cd = new SqlCommand(sql, connection);
            cd.Parameters.AddWithValue("@first_name", request.first_name);
            cd.Parameters.AddWithValue("@last_name", request.last_name);
            cd.Parameters.AddWithValue("@email", request.email);
            cd.Parameters.AddWithValue("@username", request.username);
            var helper = new GeneralHelper();
            var hashedPassword = helper.HashPassword(request.password);
            cd.Parameters.AddWithValue("@password",hashedPassword);
            cd.Parameters.AddWithValue("@id", request.id);
            
            var rowaffected = cd.ExecuteNonQuery();
            if (rowaffected > 0)
            {
                return "User Updated successfully";
            }
            else
            {
                return "Can not update User";
            }
        }
        catch (Exception ex)
        {
            return $"Error Update User {ex.Message} ";
        }
    }

    [HttpDelete("delete")]
    public string DeleteUser([FromBody] UserEntity request)
    {
        try
        {
            var connectionString = _configuration.GetConnectionString("Default");
            SqlConnection connection = new SqlConnection(connectionString);
            var sql = "DELETE FROM tbl_user WHERE id=@id ";
            SqlCommand command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@id", request.id);
            connection.Open();
            var rowaffected = command.ExecuteNonQuery();
            if (rowaffected > 0)
            {
                return "Delete User Successfully";
            }
            else
            {
                return "Can not delete User";
            }

        }
        catch (Exception e)
        {
            return $"Delete Product fail {e.Message} ";
        }
    }
}