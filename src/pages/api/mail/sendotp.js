import { sendVerificationOtp } from "@/helperFunction/sendmail/verificationOtp";

export default async function handler(req, res) {
    if(req.method === 'POST'){
        try {
            const {email, otp} = await req.body;
            var msg = "Verification OTP : " +otp+ "\n";
            await sendVerificationOtp(email,msg);
            return res.status(200).json({ msg:"otp send" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg:error })
        }
    }
}