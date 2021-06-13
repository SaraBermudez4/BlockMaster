import { Box, Flex, Heading, Button, FormControl, FormHelperText, Input, InputGroup, InputRightElement, Link, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import { BsFillLockFill } from 'react-icons/bs'
import { Link as LinkR } from 'react-router-dom'
import fondo from '../../images/fondo7.jpg'
const Login = () => {
    // , backgroundRepeat: "noRepeat", backgroundAttachment: "fixed", backgroundSize: "cover"
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <div style={{display:"flex", height:"100vh", justifyContent:"center", alignItems:"center", width:"100vw", backgroundImage:`url(${fondo})`, backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover"}}>
            <div style={{
                background: "rgb(238 237 243 / 93%)", textAlign: "-webkit-center", marginLeft: "10%",
                marginRight: "10%", borderRadius: "15px", width: "100%"
            }}>
                {/* <Heading color="#0f0e17" padding="2%">Block Master</Heading> */}
                <Flex color="white" >
                    <Box w="100%" h="400px" bg="#ffa903b3" borderRadius=" 15px 0 0 15px">
                        <div style={{ borderRadius: "60%", background: "#0f0e17", width: "250px", height: "250px", marginTop: "10%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Image src="https://i.ibb.co/mFhx8Xs/logo-block-Buster.png" width="200px" style={{ height: "40%" }} />
                        </div>
                        {/* <Heading fontSize="5xl" color="#0f0e17">Welcome</Heading> */}
                    </Box>
                    <Box w="100%" h="400px" padding="5%" >
                        <Heading color="#0f0e17">Login</Heading>
                        <FormControl id="email">
                            {/* <FormLabel>Email address</FormLabel> */}
                            <Input type="email" placeholder="Email address" />
                            <FormHelperText textAlign="left">We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <InputGroup size="md">
                                <Input
                                    pr="4.5rem"
                                    type={show ? "text" : "password"}
                                    placeholder="Enter password"
                                />
                                <InputRightElement width="4.5rem">
                                    <Button h="1.75rem" size="sm" onClick={handleClick} background="gray.600">
                                        {show ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Link href="#" display="flex" textAlign="right" color="black" margin="10px">
                            <BsFillLockFill mx="2px" />Forgot Password?
                        </Link>
                        <Stack direction="row" spacing={4} align="center" justifyContent="space-around">
                            <Button colorScheme="yellow" background="#ffa903b3" variant="solid" w="100%">
                                Login
                            </Button>
                            <LinkR to="/auth/register">
                                <Button colorScheme="yellow" color="#ffa903b3" borderColor="#ffa903b3" variant="outline" w="100%">
                                    New register
                                </Button>
                            </LinkR>
                        </Stack>
                    </Box>

                </Flex>
            </div>
        </div>
    )
}

export default Login
