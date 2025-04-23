import React, { useEffect } from "react";
import './style-home.scss';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../../redux/slice/destinationReducer.js";
import { useNavigate } from "react-router-dom";


import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Button,
} from "@mui/material";

const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.destinations.isLoading);
    const destinationsList = useSelector(state => state.destinations.list);
    const selectedDestination = useSelector(state => state.destinations.selectedDestination);

    const navigate = useNavigate();


    useEffect(() => {
        dispatch(fetchDestinations());
    }, []);

    const formik = useFormik({
        initialValues: {
            destination: selectedDestination || '',
            checkIn: '',
            checkOut: '',
            adults: '',
            children: ''
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
            navigate('/hotels');
        }
    });

    return (
        <div className="home-content">

            <form className="main-search" onSubmit={formik.handleSubmit}>
                <FormControl fullWidth>
                    <InputLabel id="destination-label">Destination</InputLabel>
                    <Select
                        labelId="destination-label"
                        id="destination"
                        name="destination"
                        value={formik.values.destination}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        {destinationsList.map(d => (
                            <MenuItem key={d.id} value={d.id}>{d.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField label="Check in" type="date" name="checkIn"
                    value={formik.values.checkIn}
                    onChange={formik.handleChange}
                    InputLabelProps={{ shrink: true }}
                />

                <TextField label="Check out" type="date" name="checkOut"
                    value={formik.values.checkOut}
                    onChange={formik.handleChange}
                    InputLabelProps={{ shrink: true }}
                />

                <TextField label="Adults" type="number" name="adults"
                    value={formik.values.adults}
                    onChange={formik.handleChange}
                />

                <TextField label="Children" type="number" name="children"
                    value={formik.values.children}
                    onChange={formik.handleChange}
                />

                <Button type="submit" variant="contained" color="warning">SUBMIT</Button>
            </form>

            <h2 className="home-content__title">
                <span>Travel With</span><span className="orang">Boooking</span>
            </h2>
            <div>
                Discover new destinations with ease and comfort.
                Our service helps you plan every step of your journey.
                From booking to check-in — we’re with you all the way.
                Find places you'll love, wherever you go.
                Get personalized recommendations and exclusive deals.
                Your perfect trip starts with just one click.
            </div>
        </div>
    );
}

export default Home;
