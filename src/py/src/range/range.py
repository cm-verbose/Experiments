# Range creates a range that can be looped through using a for ... in loop.
# Signatures: range(start: int, stop: int, step: int)
#.            range(stop: int)
# The range created contains all integers in [start, stop[, and each number
# has the difference of step between subsequent values if there is one. With
# a range with one parameter, the [start] is set to 0 and [step] is set to 1.
# A [step] of 0 will throw a ValueError.

# Loop through numbers 0 to 9
print("loop (1):")
a = range(10)

for i in a:
  print(i)

# range(...) implements __contains__() to see if a given value is in the range.
print("contains 3?:", 3 in a) # True 

# range(...) implements count(self, int) to count the number of occurences of
# a given number in a range. Note: this is only useful in dynamic ranges to 
# check if a particular number is within a range. The count is:
# - 0 if the number is not a range 
# - 1 if the number is in the range 
# These values can then be used as part of a calculation, but using 
# __contains__() is usually better. 
print("count: ", a.count(2))

# range(...) implements __eq__() which is useful for comparing to another range
print("is equal to other?", a == range(10))

# range(...) implements __getitem__() which allows to use braces to get a
# value from an index. Slices can also be used. 
print("int at index 4:", a[4])

# range(...) implements __hash__() which returns hash to be used when comparing
# to another range. 
print("hash of range a:", hash(a))

# range(...) implements index() which gets the index of a specified value or
# raises a ValueError if the value is not found 
print("index of value 2:", a.index(2));

# range(...) implements __iter__ which allows to loop through the range in 
# different ways. For example, we can loop through the first 4 elements:

print("iter loop (1):")

# Note that changing this to a value that is greater than len(a) will raise
# StopIteration 
iteration_count = 4
iterator = iter(a)

while(iteration_count > 0):
  n = next(iterator)
  print(n)
  iteration_count -= 1; 

# range(...) implements __len__() (gets the amount of integers in this range)
print("length:", len(a)) # 10 

# range(...) implements __reversed__() (reverses the range). For example, this
# will print integers 9 to 0:
print("reversed loop (1):")
for i in reversed(a):
  print(i)

# Note that the reverse() only reverses the range, and does not set the start
# value to the end of the reversed range. In this case for example, the range
# does not contain the number 10 as the original only contains the values
# 0, 2, 4, 6, 8. The reversed range is then: 8, 6, 4, 2, 0. 
print("reversed loop (2):")
for i in reversed(range(0, 10, 2)):
  print(i)
