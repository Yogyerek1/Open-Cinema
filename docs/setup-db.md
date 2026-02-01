create docker container -> docker run --name opencinema_db -e POSTGRES_PASSWORD=YOUR_PASSWORD -p 5431:5432 -d postgres

psql terminal -> docker exec -it opencinema_db psql -U postgres
quit -> \q

start db -> docker start opencinema_db
check status -> docker ps