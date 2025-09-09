package services

import (
	"github.com/go-resty/resty/v2"
)

type RestService struct {
	client *resty.Client
}

func NewRestService() *RestService {
	return &RestService{
		client: resty.New(),
	}
}

func (a *RestService) GetPost(id string) (string, error) {
	resp, err := a.client.R().
		Get("https://jsonplaceholder.typicode.com/posts" + id)
	if err != nil {
		return "", err
	}
	return resp.String(), nil
}

func (a *RestService) CreatePost(jsonBody string) (string, error) {
	resp, err := a.client.R().
		SetHeader("Content-Type", "application/json").
		SetBody(jsonBody).
		Post("https://jsonplaceholder.typicode.com/posts")
	if err != nil {
		return "", err
	}
	return resp.String(), nil
}

func (a *RestService) PutPost(id string, jsonBody string) (string, error) {
	resp, err := a.client.R().
		SetHeader("Content-Type", "application/json").
		SetBody(jsonBody).
		Put("https://jsonplaceholder.typicode.com/posts/" + id)
	if err != nil {
		return "", err
	}
	return resp.String(), nil
}

func (a *RestService) PatchPost(id string, jsonBody string) (string, error) {
	resp, err := a.client.R().
		SetHeader("Content-Type", "application/json").
		SetBody(jsonBody).
		Patch("https://jsonplaceholder.typicode.com/posts/" + id)
	if err != nil {
		return "", err
	}
	return resp.String(), nil
}

func (a *RestService) DeletePost(id string) (string, error) {
	resp, err := a.client.R().
		Delete("https://jsonplaceholder.typicode.com/posts/" + id)
	if err != nil {
		return "", err
	}
	return resp.String(), nil
}
