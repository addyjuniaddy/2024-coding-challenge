def array_diff(a, b):
    return [x for x in a if x not in b]

# Example usage:
result1 = array_diff([1, 2, 13, 101], [1])
print(result1)  # Output: [2]

result2 = array_diff([1, 2, 2, 2, 3], [2])
print(result2)  # Output: [1, 3]
