const cookieToken = (user: any, res: any) => {
    const token = user.getSignedJwtToken();
    const cookieExpire = process.env.JWT_COOKIE_EXPIRE as string;
    const cookieOptions = {
        expires: new Date(Date.now() + parseInt(cookieExpire) * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };

    user.password = undefined;
    res.status(200).cookie('token', token, cookieOptions).json({
        success: true,
        token,
        user,
    });
}

export default cookieToken;