# 5回繰り返す
for i in range( 5 ):
    print( "○" )
print()

# 変数 i はカウンタとして利用可能
for i in range( 5 ):
    print( i )
print()

# 変数 i を式に組み込む（その１）
for i in range( 5 ):
    print( "○" * i )
print()

# 変数 i を式に組み込む（その２）
for i in range(5):
    print( " "*i, end="" )
    print( "○"*(5-i) )
print()