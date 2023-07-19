## The Makefile includes instructions how to run this app in docker

build:
	docker build -t ap18light-fe . 

run-docker:
	docker run -d -p 3000:3000 ap18light-fe

all: build run-docker