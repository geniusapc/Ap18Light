flowID=$1
STACKS=$@
echo "flowID: $flowID"
echo "STACKS: $STACKS"

for stack in $STACKS
do

BUCKETNAME="s3://ap18light-${stack: -7}"
STACKNAME="ap18light-frontend-$flowID"

echo "BUCKETNAME: $BUCKETNAME"
echo "STACKNAME: $STACKNAME"

if [[ $stack =~ "$flowID" ]]
then
  echo "Keeping $stack because equal"
elif [[ $stack =~ "cloudfront-stack" ]]
then
  echo "Keeping $stack because production stack"
else
  echo "Deleting $stack"
  echo "deleting bucket: $BUCKETNAME"
  echo "deleting stack: $STACKNAME"

  # aws s3 rb "s3://ap18light-$BUCKETNAME" --force
  # aws cloudformation delete-stack --stack-name "ap18light-frontend-$flowID"
fi
done