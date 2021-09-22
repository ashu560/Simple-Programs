First = int(input("Enter First Number :"))
Second = int(input("Enter Second Number :"))
Third = int(input("Enter Third Number :"))

if First > Second:
    if First > Third:
        print(f"{First} is Greatest")
    else:
        print(f"{Third} is Greatest")
else:
    if Second > Third:
        print(f"{Second} is Greatest")
    else:
        print(f"{Third} is Greatest")


# OR
# if (num1 >= num2) and (num1 >= num3):
#    largest = num1
# elif (num2 >= num1) and (num2 >= num3):
#    largest = num2
# else:
#    largest = num3
# print(largest)
                
