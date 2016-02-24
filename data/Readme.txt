This file content to introduct about 'Test data information'.

0: suggested by anh Tri

1: empty case

2: normal case with whole Name and Age
2-1: limit of #2 with 1 record (once)
2-2: limit of #2 with 2 records (multiple)
2-3: limit of #2 with 3 records (more)
2-4: limit of #2 with 50 records (big)

3: normal case with miss Age
3-1: limit of #3 with 1 records
3-2: limit of #3 with 2 records
3-3: limit of #3 with 3 records
3-4: limit of #3 with 50 records

4: normal case with miss Age of one position
4-1: missed at 1st/5 (first)
4-2: missed at 2nd/5 (after first)
4-3: missed at 3rd/5 (middle)
4-4: missed at 4th/5 (near bottom)
4-5: missed at 5rd/5 (last)

5: normal case with miss Age of more position
5-1: missed at 1st and 2nd /5
5-2: missed at 1st and 3rd /5
5-3: missed at 1st and 5th /5
5-4: missed at 2nd and 3rd /5
5-5: missed at 2nd and 4th /5
5-6: missed at 2nd and 5th /5
5-7: missed at 4th and 5th /5

6: JSON injection cases (name contain)
(http://stackoverflow.com/questions/19176024/how-to-escape-special-characters-in-building-a-json-string)
6-1: Name contain quote (\")
6-2: Name contain single quote (\')
6-3: Name contain comma (,)
6-4: Name contain backslash (\\)
6-5: Name contain slash (\/)
6-6: Name contain left brace {
6-7: Name contain right brace }
6-8: Name contain left bracket [
6-9: Name contain right bracket ]
6-10: Name contain all control characters like \t Tab
6-11: Name contain all control characters like \b Backspace (ascii code 08)
6-12: Name contain all control characters like \f Form feed (ascii code 0C)
6-13: Name contain all control characters like \n New line (windows)
6-14: Name contain all control characters like \r Carriage return
6-15: Name contain all control characters like \u followed by four-hex-digits

7: Validation cases
(pending Q&A)


** total case: (1 + 4) + 4 + 5 + 7 = 17 + 4 = 21 cases