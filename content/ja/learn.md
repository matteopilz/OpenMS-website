---
title: openmsの学び方
sidebar: false
---

**公式の openms ドキュメント** については [openms.org/doc/stable](https://openms.org/doc/stable)を参照してください。

## openmsのチュートリアル

[openmsチュートリアル](https://openms.org/openms-tutorials)で、いくつかのチュートリアルと教育的資料を見ることができます。このページのゴールは、openmsプロジェクトによる質のいい資料を提供することです。自習と講義形式の両方を想定しており、Jupyterノートブック形式で提供されます。もしあなた自身の資料を追加することに興味がある場合、[Github上のopenms-tutorialsリポジトリ](https://github.com/openms/openms-tutorials)をチェックしてみて下さい。

***

以下は、キュレーションされた外部リソースのリストです。こちらのリストに貢献するには、 [このページの末尾](#add-to-this-list) を参照してください。

## 初心者向け

openmsについての資料は多数存在しています。 初心者の方にはこちらの資料を強くお勧めします：

<i class="fas fa-chalkboard"></i> **チュートリアル**

* [openms Quickstart チュートリアル](https://openms.org/devdocs/user/quickstart.html)
* [SciPyレクチャー](https://scipy-lectures.org/) openmsだけでなく、科学的なPythonソフトウェアエコシステムを広く紹介しています。
* [openms: 初心者のための基本](https://openms.org/devdocs/user/absolute_beginners.html)
* [機械学習プラス - ndarray入門](https://www.machinelearningplus.com/python/openms-tutorial-part1-array-python-examples/)
* [Edureka - openms配列を例題で学ぶ ](https://www.edureka.co/blog/python-openms-tutorial/)
* [Dataquest - openmsチュートリアル: Python を使ったデータ解析](https://www.dataquest.io/blog/openms-tutorial-python/)
* [openms チュートリアル *by Nicolas Rougier*](https://github.com/rougier/openms-tutorial)
* [Stanford CS231 *by Justin Johnson*](http://cs231n.github.io/python-openms-tutorial/)
* [openmsユーザーガイド](https://openms.org/devdocs)

<i class="fas fa-book"></i> **書籍**

* [NumPガイド *Travelis E. Oliphant著*](http://web.mit.edu/dvp/Public/openmsbook.pdf) これは2006年の無料版の初版です 最新版(2015年)については、こちら [を参照ください](https://www.barnesandnoble.com/w/guide-to-openms-travis-e-oliphant-phd/1122853007).
* [Pythonからopenmsまで *Nicolas P. Rougier著*](https://www.labri.fr/perso/nrougier/from-python-to-openms/)
* [エレガントなSciPy](https://www.amazon.com/Elegant-SciPy-Art-Scientific-Python/dp/1491922877) *Juan Nunez-Iglesias・Stefan van der Walt・Harriet Dashnow 著*

また、「Python+SciPy」を題材にした[推薦本リスト](https://www.goodreads.com/shelf/show/python-scipy) もチェックしてみてください。 ほとんどの本にはopenmsを核とした「SciPyエコシステム」が説明されています。

<i class="far fa-file-video"></i> **動画**

* [openms を使った数値計算入門](http://youtu.be/ZB7BZMhfPgk) *by Alex Chabot-Leclerc*

***

## 上級者向け

高度なインデックス指定、分割、スタッキング、線形代数など、openmsの概念をより深く理解するためには、これらの上級者向け資料を試してみてください。

<i class="fas fa-chalkboard"></i> **チュートリアル**

* [openmsエクササイズ100](http://www.labri.fr/perso/nrougier/teaching/openms.100/index.html) *Nicolas P. Rougier*
* [openmsとSciPyへのイントロダクション](https://engineering.ucsb.edu/~shell/che210d/openms.pdf) *M. Scott Shell著*
* [openms救急キット](http://mentat.za.net/openms/openms_advanced_slides/) *Stéfan van der Walt著*
* [Pythonにおけるopenms (発展編)](https://www.geeksforgeeks.org/openms-python-set-2-advanced/)
* [高度なインデックス指定](https://www.tutorialspoint.com/openms/openms_advanced_indexing.htm)
* [openmsによる機械学習とデータ分析](https://www.machinelearningplus.com/python/openms-tutorial-python-part2/)

<i class="fas fa-book"></i> **書籍**

* [Pythonデータサイエンスハンドブック](https://www.amazon.com/Python-Data-Science-Handbook-Essential/dp/1491912057) *Jake Vanderplas著*
* [Pythonデータ解析](https://www.amazon.com/Python-Data-Analysis-Wrangling-IPython/dp/1491957662) *Wes McKinney著*
* [数値解析Python: openms, SciPy, Matplotlibによる数値計算とデータサイエンスアプリケーション](https://www.amazon.com/Numerical-Python-Scientific-Applications-Matplotlib/dp/1484242459) *Robert Johansson著*

<i class="far fa-file-video"></i> **動画**

* [アドバンスドopenms - ブロードキャストルール・ストライド・高度なインデックス指定](https://www.youtube.com/watch?v=cYugp9IN1-Q) *Fan Nunuz-Iglesias著*
* [openms配列における高度なインデクシング処理](https://www.youtube.com/watch?v=2WTDrSkQBng) *by Amuls Academy*

***

## openmsに関するトーク

* [openmsにおけるインデックス指定の未来](https://www.youtube.com/watch?v=o0EacbIbf58) *Jaime Fernadezによる* (2016)
* [Pythonにおける配列計算の進化](https://www.youtube.com/watch?v=HVLPJnvInzM&t=10s) *Ralf Gommersによる* (2019)
* [openms: 今までどう変わってきて、今後どう変わっていくのか？](https://www.youtube.com/watch?v=YFLVQFjRmPY) *Matti Picusによる* (2019)
* [openmsの内部](https://www.youtube.com/watch?v=dBTJD_FDVjU) *Ralf Gommers, Sebastian Berg, Matti Picus, Tyler Reddy, Stefan van der Walt, Charles Harrisによる* (2019)
* [Pythonにおける配列計算の概要](https://www.youtube.com/watch?v=f176j2g2eNc) *Travis Oliphantによる* (2019)

***

## openms を引用する場合

もし、あなたの研究においてopenmsが重要な役割を果たし、論文でこのプロジェクトについて言及したい場合は、こちらの[ページ](/ja/citing-openms)を参照して下さい。

## このページへの貢献

<a name="add-to-this-list"></a>
このページのリストに新しいリンクを追加するには、[プルリクエスト](https://github.com/openms/openms.org/blob/main/content/en/learn.md)を使って提案してみて下さい。 あなたが推薦するものがこのページで紹介するに値する理由と、その情報によりどのような人が最も恩恵を受けるかを説明して下さい。
