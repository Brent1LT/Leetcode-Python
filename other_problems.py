def left_turn(one, two, three):
  if two[0] > one[0]:
    if three[1] > two[1]:
      return True
    else:
      return False
  elif two[0] < one[0]:
    if three[1] < two[1]:
      return True
    else:
      return False
  else:
    if two[1] > one[1] and three[0] < two[0]:
      return True
    elif two[1] < one[1] and three[0] > two[0]:
      return True
    else:
      return False

print(left_turn((0,0), (2,2), (2,3)))
print(left_turn((0,2), (0,0), (2,0)))
