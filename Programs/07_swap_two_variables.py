# Swap Two Variables

firstVariable = int(input("Enter First Variable : "))
secondVariable = int(input("Enter Second Variable : "))

print("++++++++++++++++++++++")
print("Values Before Swap")
print(f"First Variable : {firstVariable} and\nSecond Variable : {secondVariable}")
print("++++++++++++++++++++++")

# Main Logic

temp = firstVariable
firstVariable = secondVariable
secondVariable = temp

print("Values After Swap")
print(f"Second Variable : {firstVariable} and\nFirst Variable : {secondVariable}")
print("++++++++++++++++++++++")

