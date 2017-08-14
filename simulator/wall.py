#!/usr/bin/env python2
from functools import partial

num_pixels_x = 82 # 50 + 8 + 24
num_pixels_y = 12 # 10 + 2
spacing_h = 0.11  # m
spacing_v = 0.25  # m

excluded = [
    [(15,0), (28,8)], # door
    [(0,10), (58,12)], # top
    [(51,0), (58,10)], # between new and old
    [(58,0), (82,2)] # under window
]

def contains(point, exclude):
    bl_x = min(exclude[0][0], exclude[1][0])
    bl_y = min(exclude[0][1], exclude[1][1])
    tr_x = max(exclude[0][0], exclude[1][0])
    tr_y = max(exclude[0][1], exclude[1][1])
    return bl_x <= point[0] < tr_x and bl_y <= point[1] < tr_y

def contains_any(excluded, point):
    return reduce(
        lambda all, inside : all | inside,
        map(partial(contains, point), excluded),
        False
    )

lines = []
for row in range(num_pixels_y):
    for col in range(num_pixels_x):
        excl = contains_any(excluded, (col, row))
        lines.append('  {"point": [%.2f, %.2f, %.2f]}' %
                 (col*spacing_h, (0 if not excl else 1000000), row*spacing_v))
print '[\n' + ',\n'.join(lines) + '\n]'
