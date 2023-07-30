flowID=$1
STACKS=$@
echo "flowID: $flowID"
echo "STACKS: $STACKS"

for stack in $STACKS
do
BUCKETNAME=${stack: -7}
echo "BUCKETNAME: $BUCKETNAME"
if [[ $stack =~ "$flowID" ]]
then
  echo "Keeping $stack because equal"
elif [[ $stack =~ "cloudfront-stack" ]]
then
  echo "Keeping $stack because production stack"
else
  echo "Deleting $stack"
  echo "URL: s3://ap18light-$BUCKETNAME"
  # aws s3 rb "s3://ap18light-$BUCKETNAME" --force
  # aws cloudformation delete-stack --stack-name "ap18light-frontend-$flowID"
fi
done