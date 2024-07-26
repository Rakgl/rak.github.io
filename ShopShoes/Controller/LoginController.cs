using System.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using ShopShoes.Entity;
using ShopShoes.Helper;

namespace ShopShoes.Controller;

[ApiController]
[Route(template:"api/login")]
public class LoginController : ControllerBase
{
    private readonly IConfiguration _configuration;
    
    public LoginController(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    [HttpPost]
    public IActionResult DoLogin([FromBody] LoginEntity request)
    {
        var conStr = _configuration.GetConnectionString(name: "Default");
        SqlConnection conn = new SqlConnection(conStr);
        conn.Open();
        var sql = "SELECT *FROM tbl_user WHERE username = @username";
        SqlCommand cd = new SqlCommand(sql, conn);
        cd.Parameters.AddWithValue("@username", request.username);
        var reader = cd.ExecuteReader();
        var user = new UserEntity();
        if (reader.HasRows)
        {
            reader.Read();
            var firstName = reader.GetString(i:1);
            var lastName = reader.GetString(2);
            var email = reader.GetString(3);
            var userName = reader.GetString(4);
            var passWord = reader.GetString(5);
            user.first_name = firstName;
            user.last_name = lastName;
            user.email = email;
            user.username = userName;
            user.password = passWord;

        }
        
        var helper = new GeneralHelper();
        var isMatch =helper.VerifyPassword(request.password, user.password ?? "");
        if (!isMatch)
        {
            return Unauthorized("Wrong username and Password ");
        }

        var res = new
        {
            firstName = user.first_name,
            lastName = user.last_name,
            email = user.email,
            userName = user.username,
        };
        return Ok(res);
    }
}