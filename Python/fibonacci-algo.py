prev1 = 0
prev2 = 1

print(prev1)
print(prev2)
for fibo in range(18):
    newFibo = prev1 + prev2
    print(newFibo)
    prev1 = prev2
    prev2 = newFibo

# using recursion ------
def F(n): 
    if n <= 1:
        return n;
    else:
        return F(n-1) + F(n-2);
    
print(F(10)) # 55