n=1
for file in *; do
    mv "$file" "img$n.jpg"
    n=$((n + 1))
done