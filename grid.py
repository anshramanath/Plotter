# 28x28 grid
for c in range(28, 0, -1):
    print("<div>")
    for r in range(1, 29):
        cord = str(r) + "," + str(c)
        print(f"\t<button class=\"square\" id=\"({cord})\" onclick=\"lightUp('({cord})')\"></button>")
    print("</div>")
