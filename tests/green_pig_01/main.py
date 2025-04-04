###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from basic_ocr.basic_ocr import get_ocr, get_threshold_img

path = parent + "/tests/green_pig_01/img/img.jpg"

img = get_threshold_img(
    image=path,
    save_path="img/thresh.jpg"
)

ocr_data = get_ocr(
    image=img.img,
    lang="eng+tha",
    save_path_img="img/mark.jpg",
    psm=11
)

ocr_data.save_text(path="../save_target/green_pig/text.txt")
ocr_data.get_osd()
ocr_data.save_text(path="../save_target/green_pig_osd.txt")
