x = int(input())
d = input()

count = 0
for digit in str(x):
    if digit == d:
        count += 1

print(count)