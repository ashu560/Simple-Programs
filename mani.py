firstLine = input("Enter first Number:"))

secondline = input("Enter second Line:")

# if str(firstLine) in secondline:
# if secondline.find(firstLine):
#     print(secondline)
# else:
#     print(firstLine)


for i in str(firstLine):
    print(f"{i}\n")
    i+=1

print(secondline.count(firstLine))
