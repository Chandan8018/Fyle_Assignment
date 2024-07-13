import { Alert, Checkbox, FloatingLabel, Modal, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { Button } from "flowbite-react";

function ContactUs(props) {
  const [query, setQuery] = useState({});
  const [checkedInput, setCheckedInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [dataSendSucess, setDataSendSucess] = useState(null);
  const [dataFetch, setDataFetch] = useState(false);

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    if (!query.email || !query.fristName || !query.lastName) {
      return setErrorMessage("Please fill out all fields");
    }
    setDataFetch(true);
    try {
      const res = await fetch("https://getform.io/f/adryrega", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query),
      })
        .then(() => {
          setCheckedInput(false);
          setQuery({});
          setDataSendSucess("Data send sucessfully");
          setErrorMessage(null);
          setDataFetch(false);
        })
        .catch((err) => {
          setErrorMessage(err.message);
          setCheckedInput(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      show={props.openModal}
      size='lg'
      onClose={() => {
        props.setOpenModal(false);
        setDataSendSucess(null);
        setErrorMessage(null);
      }}
      popup
    >
      <Modal.Header />
      <Modal.Body>
        <h3 className='text-left tracking-wide text-[#2D3142] opacity-100 font-bold'>
          Talk to us
        </h3>
        <form className='pt-5 flex flex-col gap-5' onSubmit={formSubmit}>
          <FloatingLabel
            variant='standard'
            label='Work email*'
            name='email'
            value={query.email}
            onChange={handleParam()}
          />
          <div className='grid grid-cols-2 gap-10'>
            <FloatingLabel
              variant='standard'
              label='First name*'
              name='fristName'
              value={query.fristName}
              onChange={handleParam()}
              className=''
            />
            <FloatingLabel
              variant='standard'
              label='Last name*'
              name='lastName'
              value={query.lastName}
              onChange={handleParam()}
            />
          </div>
          <div className='flex justify-between gap-2'>
            <Checkbox
              id='remember'
              onClick={() => setCheckedInput(!checkedInput)}
              className='focus:ring-0 text-[#FF3366]'
              checked={checkedInput}
            />
            <p className='-mt-2 text-left tracking-normal text-[#616678] opacity-90'>
              I agree to Fyle's terms and conditions, and provide consent to
              send me communication.
            </p>
          </div>
          <Button
            className='w-full focus:ring-0 bg-[#FF3366] hover:bg-[#FF3366]'
            type='submit'
            color='failure'
            disabled={!checkedInput}
          >
            {dataFetch ? (
              <span>
                <Spinner
                  color='warning'
                  aria-label='Warning spinner example'
                  size='sm'
                />{" "}
                Sending...
              </span>
            ) : (
              "Contact Us"
            )}
          </Button>
          {errorMessage && (
            <Alert
              color='failure'
              onDismiss={() => {
                alert("Alert dismissed!");
                setErrorMessage(null);
              }}
            >
              <span className='font-medium'>Info alert!</span> {errorMessage}
            </Alert>
          )}
          {dataSendSucess && (
            <Alert
              color='success'
              onDismiss={() => {
                alert("Alert dismissed!");
                setDataSendSucess(null);
              }}
            >
              <span className='font-medium'>Info alert!</span> {dataSendSucess}
            </Alert>
          )}
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ContactUs;
