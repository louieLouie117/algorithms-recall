/*Given a string, you have to return a string in which each character is repeated once.*/

public class Kata
{
    public static string DoubleChar(string s)
    {
        // your code here
        string newStr = "";
        for (int i = 0; i < s.Length; i++)
        {
            newStr += s[i];
            newStr += s[i];
        }
        return newStr;
    }
}



//------------------------------------------------------------------------------

// We need a function that can transform a number (integer) into a string.
public class Kata
{
    public static string NumberToString(int num)
    {
        // code here
        string str = num.ToString();
        return str;
    }
}


public class Kata
{
    public static string NumberToString(int num)
    {
        // code here
        return num.ToString();
    }
}


//------------------------------------------------------------------------------