num = int(input("Enter a num to check prime or Not : "))

if num > 1:
    for i in range(2 , num):
        if(num % i == 0 ):    
            print(f"{num} is not a prime num.")
            print(i,"times",num//i,"is",num)
            break
    else:
        print(f"{num} is a prime num.")            
else:
    print(f"{num} is not a prime num.")            


# or

# flag = False

# # prime numbers are greater than 1
# if num > 1:
#     # check for factors
#     for i in range(2, num):
#         if (num % i) == 0:
#             # if factor is found, set flag to True
#             flag = True
#             # break out of loop
#             break

# # check if flag is True
# if flag:
#     print(num, "is not a prime number")
# else:
#     print(num, "is a prime number")