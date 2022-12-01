import React, { useState, useEffect } from "react";
import { Form, TextArea, Button, Icon } from "semantic-ui-react";
import { languageTypeReq, languageRequest } from "../utils/axios";
// import axios from "axios";

function Translate() {
  const [input, setInput] = useState(" ");
  const [result, setResult] = useState(" ");
  const [languageList, setLanguageList] = useState([]);
  const [detectLanguage, setDetectLanguage] = useState("");
  const [selectedLanguage, setSelectLanguage] = useState([]);

  //得到languageList
  const fetchLanguage = async () => {
    await languageTypeReq()
      .then((res) => {
        setLanguageList(res.data.supported_languages);
        // console.log(res.data.supported_languages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //回傳input的語言，更新detectLanguage
  const handleDetectLanguage = async () => {
    await languageRequest
      .post("language_detect", { text: input })
      .then((res) => {
        // console.log("detect: ", res.data.language_detection.language);
        setDetectLanguage(res.data.language_detection.language);
      })
      .catch((err) => {
        console.log("detect: ", err);
      });
  };

  //更新selectLanguage
  const handleSelectLanguage = (selectedLanguage) => {
    console.log(selectedLanguage.target.value);
    setSelectLanguage(selectedLanguage.target.value);
  };

  const handleTranslate = async () => {
    let data = {
      text: input,
      source: detectLanguage,
      target: selectedLanguage,
    };
    console.log(data);
    await languageRequest
      .post("translate", data)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.translations.translation);
      })
      .catch((err) => {
        console.log("translate: ", err);
      });
  };

  useEffect(() => {
    fetchLanguage();
    handleDetectLanguage();
  }, [input]);

  return (
    <div>
      <div className="translate-header">
        <h2 className="header">Translate</h2>
      </div>
      <div className="translate-body">
        <div>
          <Form>
            <Form.Field
              control={TextArea}
              // label="About"
              placeholder="Type text to translate..."
              onChange={(e) => setInput(e.target.value)}
            />
            {/* <Form.Select fluid placeholder="Select Language" /> */}

            <select className="language-select" onChange={handleSelectLanguage}>
              <option>Please Select Language.....</option>
              {Object.keys(languageList).map((language) => {
                return (
                  <option
                    key={languageList[language]}
                    value={languageList[language]}
                  >
                    {language}
                  </option>
                );
              })}
            </select>
            <div className="btn-translate">
              <Button color="orange" size="large" onClick={handleTranslate}>
                <Icon name="translate"></Icon>Translate
              </Button>
            </div>
            <Form.Field
              control={TextArea}
              // label="About"
              placeholder="Your Result"
              // onChange={(e) => setResult(e.target.value)}
              value={result}
            />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Translate;
