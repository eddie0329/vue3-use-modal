echo "Current version:" $(grep version package.json | sed -E 's/^.*"([0-9][^"]+)".*$/\1/')

read -p "Are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line

if [[ $REPLY =~ ^[Yy]$ ]]
then
  npm version patch
  echo "Releasing version:" $(grep version package.json | sed -E 's/^.*"([0-9][^"]+)".*$/\1/')
  git push origin v$(grep version package.json | sed -E 's/^.*"([0-9][^"]+)".*$/\1/')
fi
