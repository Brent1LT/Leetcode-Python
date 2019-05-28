def isPalindrome(self, x: int) -> bool:
  string = str(x)
  reversed = string[::-1]
  return string == reversed