# Convert KM to Miles
# So, to convert 'x' kilometers to miles, we multiply 'x' with the conversion factor.
# This means 'x' kilometers = (0.62137x) miles.
one_mile = 0.62137

print("-----------------------")
km = float(input("Enter KiloMeter : "))
print(f"You entered {km} as kilometer.")

miles = one_mile * km
print("Miles is %0.2f " %miles )
print("-----------------------")

