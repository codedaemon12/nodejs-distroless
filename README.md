# nodejs-distroless

# Sample request -

addToDo --
curl --location --request POST '0.0.0.0:3000/addToDo' \
--header 'Content-Type: application/json' \
--data-raw '{
    "todo":"Get coffee"
}'