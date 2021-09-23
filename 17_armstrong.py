# Find armstrong number

userIn = int(input("Enter a num : "))

sum = 0
temp = userIn

while temp > 0 :
    new = temp % 10
    sum = sum + new ** 3
    temp = temp // 10

if userIn == sum:
    print("Armstrong")    
else:
    print("Not a Armstrong")   


# Explanation
#  Here, we ask the user for a number and check if it is an Armstrong number.

# We need to calculate the sum of the cube of each digit.
# So, we initialize the sum to 0 and obtain each digit number by using the modulus operator %.
# The remainder of a number when it is divided by 10 is the last digit of that number.
# We take the cubes using exponent operator.Finally, we compare the sum with the original 
# number and conclude that it is Armstrong number if they are equal.
