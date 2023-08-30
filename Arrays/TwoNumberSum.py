
# Two Number Sum
def twoNumberSum(array, targetSum):
    # Write your code here.
    new_array_result = []
    print("target_number:", targetSum)

    for index in range(len(array) - 1):
        sum1 = array[index]
        print("sum1:", sum1)

        for j in range(index + 1, len(array)):
            sum2 = array[j]
            result = sum1 + sum2

            print("sum2:", sum2)
            print("result", result)

            if result == targetSum:
                print("two_sum_result", sum1, sum2)
                new_array_result.append(sum1)
                new_array_result.append(sum2)
                return new_array_result
            print("final_result;", new_array_result)

    return []
pass



# Two Number Sum using Hash
def twoNumberSum(array, targetSum):
    # Write your code here.
    print("data", array, "target", targetSum)
    nums = {}

    for index in range(len(array)):
        num = array[index]
        potential_match = targetSum - num

        if potential_match in nums:
            print("Final object data", nums)
            print("found two sums", [potential_match, num])
            return [potential_match, num]
        else:
            print("add to object", nums)
            nums[num] = "check"

    return []
    pass



   