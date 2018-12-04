PAC-meter : Political Alignment Checker meter

#What it does:

This extension was created with the goal of attempting to judge whether an article was politically biased.

#How it works:

The extension takes in the URL of the current webpage. It then searches the webpage for the article and then finds the finds author and political buzzwords based on a precompiled list. The list of political buzzwords are from https://www.isidewith.com/polls. Once it has found a word it the extension then tries to determine the context the word is used in. Then it assigns a score to the word based on whether it is conservative or liberal. After it has found all of the buzzwords and judged them, it generates the final score by taking the ( score / total buzz words ) * 100. A positive score means that the article has a liberal bias and if the score is negative then the article has a conservative bias. If the score is zero, then it has no bias. 


# authors
Scott Crawford
Joey Cunningham
Tim Minear
Jesse Runner
