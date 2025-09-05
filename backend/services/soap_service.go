package services

import (
	"fmt"
	"net/http"
	"time"

	"siteminds.dev/gosoap"
)

type SoapService struct {
	Endpoint string
}

func NewSoapService(endpoint string) *SoapService {
	return &SoapService{Endpoint: endpoint}
}

func (s *SoapService) NumberToWords(num int) (string, error) {
	client, err := gosoap.SoapClient(s.Endpoint, &http.Client{Timeout: 30 * time.Second})
	if err != nil {
		return "", err
	}

	out := struct {
		NumberToWordsResult string `xml:"NumberToWordsResult"`
	}{}

	res, err := client.Call("NumberToWords", gosoap.Params{"ubiNum": fmt.Sprintf("%d", num)})
	if err != nil {
		return "", err
	}

	if err := res.Unmarshal(&out); err != nil {
		return "", err
	}

	return out.NumberToWordsResult, nil
}

func (s *SoapService) NumberToDollars(num float64) (string, error) {
	client, err := gosoap.SoapClient(s.Endpoint, &http.Client{Timeout: 30 * time.Second})
	if err != nil {
		return "", err
	}

	out := struct {
		NumberToDollarsResult string `xml:"NumberToDollarsResult"`
	}{}

	res, err := client.Call("NumberToDollars", gosoap.Params{"dNum": fmt.Sprintf("%.2f", num)})
	if err != nil {
		return "", err
	}

	if err := res.Unmarshal(&out); err != nil {
		return "", err
	}

	return out.NumberToDollarsResult, nil
}
