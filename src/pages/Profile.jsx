import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../redux/actions'
//image
import BGImage from "../img/user.png";
//components
import Button from "../components/Button";

const Wrapper = styled.div `
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Box = styled.div `
    width:90%;
    min-height:80vh;
    box-shadow:${variables.boxShadow};
    @media (max-width:${variables.mediaW_2}) {
        width:95%;
    }
`;

const Info = styled.div `
    width:90%;
    margin:10px auto;
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
    border-bottom: 2px solid ${variables.hoverClr};
    @media (max-width:${variables.mediaW_2}) {
        justify-content:center;
    }
`;

const Logout = styled(Info)`
    border-bottom: unset;
`;

const Avatar = styled.div `
    min-width:70px;
    min-height:90px;
    margin-bottom:5px;
    background-image: url(${BGImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Row = styled.div `
    padding:5px 0 5px 20px;
    color:${variables.hoverClr};
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
`;

const Title = styled.p `
    padding:0 5px ;
    color:${variables.titleClr};
    font-size:${variables.titleFZ};
`;

const Text = styled(Title)`
    font-size:${variables.mainFZ};
`;

const ProfilePage = ({
    isAutorization = false,
    profile = null,
    logOut = () => {}
}) => {

    return (
        isAutorization
            ? <Wrapper>
                <Box>
                    <Info>
                        <Avatar/>
                        <div>
                            {
                                profile && <> < Row > <Title>{profile.name}</Title>
                                </Row>
                                <Row>
                                    <Text>{profile.location}</Text>
                                </Row>
                                <Row>
                                    {
                                    profile
                                        .filters
                                        .map(item => (<Text key={item}>{item}</Text>))
                                }</Row>
                        </>
                            }
                        </div>
                    </Info>
                    <Logout>
                        <Button text='Log out' fnClick={logOut} disabled={!isAutorization}/>
                    </Logout>

                </Box>
            </Wrapper>
            : <Redirect to="/login"/>
    )

}

const STP = state => (
    {isAutorization: state.isAutorization, profile: state.profile}
);

const DTP = dispatch => ({
    logOut: () => dispatch(logOut())
});
export default connect(STP, DTP,)(ProfilePage);