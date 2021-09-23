# Multiplication table of a numbers

userIn = int(input("Enter a number : "))


if userIn < 0:
    print("Enter postitive number.")

if userIn > 0:
    for i in range(1, 11):
        mul = userIn * i   
        print(mul)

