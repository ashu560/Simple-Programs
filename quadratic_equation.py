# The standard form of a quadratic equation is:

# ax2 + bx + c = 0, where
# a, b and c are real numbers and
# a ≠ 0
# The solutions of this quadratic equation is given by:

# (-b ± (b ** 2 - 4 * a * c) ** 0.5) / 2 * a


# why we use ** in python

# The special syntax **kwargs in function definitions in python is
# used to pass a keyworded, variable-length argument list. ... 
# A keyword argument is where you provide a name to the variable as you pass it into the function.

import cmath

a = 1
b = 5
c = 6

# calculate the discriminant
d = (b**2) - (4*a*c)

# final1 = (-b + (b **2) - (4 * a * c) **0.5) / 2 * a
# final2 = (b + (b **2) - (4 * a * c) **0.5) / 2 * a

final1 = (-b-cmath.sqrt(d))/2 * a
final2 = (-b+cmath.sqrt(d))/2 * a


print('The solution are {0} and {1}'.format(final1,final2))