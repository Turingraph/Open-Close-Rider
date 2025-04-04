# What is the best and the simplies image processing configuration in most case ?

*   It is recommended to use `img.threshold()` because it is simple and reliable compare to alternative in most case.

# Folder structure

1.  `date/`
-   Contains: Output of `04_ocr_date.py`
2.  `img/`
-   Contains: original image input `img.jpeg` and output of `00_img.py`
3.  `img_01_half/`
-   Contains: output of `01_half.py`
4.  `img_02_row/`
-   Contains: output of `02_row.py`
5.  `img_03_dilate/`
-   Contains: output of `03_dilate.py`
6.  `psm11/`
-   Contains: output of `06_psm11.py`
7.  `table/`
-   Contains: output of `05_ocr_table.py` and `07_ocr_table_thresh.py`
8.  `00_img.py`
-   Purpose : Transform `img.jpg` for another files.
9.  `01_half.py`
-   Purpose : Check if `row_half` method of `include/box_img.tsx` works as expected.
10. `02_row.py`
-   Purpose : Check if `row_box` method of `include/box_img.tsx` works as expected.
11. `03_dilate.py`
-   Purpose : View dilate image with `row_box` method.
12. `04_ocr_date.py`
-   Purpose : Get date data from the `img.jpeg` bill.
13. `05_ocr_table.py`
-   Purpose : Get list of purchased food data (with name in Thai and English language) and price from the `img.jpeg` bill.
14. `06_psm11.py`
-   Purpose : Get data from `eroth.jpg`, `thinn.jpg` and `thresh.jpg` with `--psm11`
15. `07_ocr_table_thresh.py`
-   Purpose : Get list of purchased food data and price from the `thresh.jpg` bill.
16. `08_row_double.py`
-   Purpose : Check if `row_box(is_double)` and `filter_half` methods of `include/box_img.tsx` works as expected.
17. `basic.py`
-   Purpose : Check if `basic_ocr/` works as expected.

# Additional Learning Resource

*   https://youtu.be/9FCw1xo_s0I?si=p5_igTL5jUrwfvUh
*   https://github.com/Turingraph/Calcite/tree/main/include
