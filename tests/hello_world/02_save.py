###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from utility.utility import get_cwd_parent, get_file, get_cwd

print(get_file())
print(get_cwd())
print(get_cwd_parent())
