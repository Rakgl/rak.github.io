namespace ShopShoes.Helper;

public class GeneralHelper
{
    public string HashPassword(string plainText)
    {
        return  BCrypt.Net.BCrypt.HashPassword(plainText);
    }

    public bool VerifyPassword(string inputPassword, string hashedPassword)
    {
        if (hashedPassword == "")
        {
            return false;
        }
        return BCrypt.Net.BCrypt.Verify(inputPassword, hashedPassword);
    }
}