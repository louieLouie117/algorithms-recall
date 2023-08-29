using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System;


// Variables: store an item

int myNum = 5;               // Integer (whole number)
double myDoubleNum = 5.99D;  // Floating point number
char myLetter = 'D';         // Character
bool myBool = true;          // Boolean
string myText = "Hello";     // String





// Arrays-------------------------------------------

string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
Console.WriteLine(cars[0]); // Outputs Volvo

int[] myNum = { 10, 20, 30, 40 };
Console.WriteLine(myNum[0]); // Outputs 10




// Loops----------------------------------------------------
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}


int i = 0;
while (i < 5)
{
    Console.WriteLine(i);
    i++;
}

// Conditional Statements---------------------------------------
if (20 > 18)
{
    Console.WriteLine("20 is greater than 18");
}


int time = 20;
if (time < 18)
{
    Console.WriteLine("Good day.");
}
else
{
    Console.WriteLine("Good evening.");
}// Outputs "Good evening."


// Functions/Methods---------------------------------------------------------------

static void MyMethod()
{
    Console.WriteLine("I just got executed!");
}



static void Main(string[] args)
{
    MyMethod();
}




namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}



// Using them all together------------------------------------------
