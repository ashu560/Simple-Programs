# Area of triangel
# where s is the semi-perimeter of the triangle; that is,

a = float(input("First :"))
b = float(input("Second :"))
c = float(input("Third :"))

s = (a + b + c)/2

area = (s*(s - a)*(s - b)*(s - c)) ** 0.5

print(" The area of triangle is %0.2f " %area)
print(" The area of triangle is %0.2i " %area)