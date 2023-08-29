# Variables--------------------------
item1 = "Hello World"  # sting
item2 = 30  # int/number
item3 = 20.5  # float
item4 = True  # boolean
item5 = 1j  # complex

print(item1)


x = str("Hello World")
x = int(20)
x = float(20.5)
x = complex(1j)

# Store multiple items----------------------------------

# List
thislist = ["apple", "banana", "cherry"]
x = list(("apple", "banana", "cherry"))
print(thislist)

# Tuple
thistuple = ("apple", "banana", "cherry")
x = tuple(("apple", "banana", "cherry"))
print(thistuple)

# Dictionary
thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}
x = dict(
    name="John",
    age=36
)
print(thisdict)

# Loops-----------------------------------


def simpleArraySum(ar):
    sum = 0
    for i in range(len(ar)):
        sum = sum + ar[i]

    return sum


fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)


i = 1
while i < 6:
    print(i)
    i += 1

# Conditional Statements------------------------------------------
a = 33
b = 200
if b > a:
    print("b is greater than a")


a = 33
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")


a = 200
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")

# Functions---------------------------------------------------


def myFunction(fName):
    print(fName + "Cardona")


myFunction("Luis")
myFunction("Janeth")
myFunction("Evelyn")
myFunction("Christopher")
myFunction("Emily")
