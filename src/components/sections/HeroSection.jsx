import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../common/Container.jsx';
import Button from '../common/Button';
import Input from '../common/Input';

const HeroSection = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            navigate(`/signup?email=${encodeURIComponent(email.trim())}`);
        } else {
            navigate('/signup');
        }
    };

    return (
        <section className="py-10 md:py-20 bg-white">
            <Container>
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
                    {/* Left: App Screenshot */}
                    <div className="w-full md:w-1/2 md:flex-[0_0_50%]">
                        <div className="mx-auto md:mx-0 overflow-hidden rounded-[32px] max-h-[340px] sm:max-h-none">
                            <picture>
                                <source
                                    srcSet="https://images.ctfassets.net/o10es7wu5gm1/4lbSrfvF333XkPz7WycixQ/afbeefb68eab9405594b2e9bfbb9a152/Hero__4_.png?fm=avif&w=1800&h=1800&q=65"
                                    type="image/avif"
                                />
                                <source
                                    srcSet="https://images.ctfassets.net/o10es7wu5gm1/4lbSrfvF333XkPz7WycixQ/afbeefb68eab9405594b2e9bfbb9a152/Hero__4_.png?fm=webp&w=1800&h=1800&q=75"
                                    type="image/webp"
                                />
                                <img
                                    src="https://images.ctfassets.net/o10es7wu5gm1/4lbSrfvF333XkPz7WycixQ/afbeefb68eab9405594b2e9bfbb9a152/Hero__4_.png"
                                    alt="Crypto app"
                                    loading="eager"
                                    width="1800"
                                    height="1800"
                                    className="w-full aspect-square object-cover"
                                />
                            </picture>
                        </div>
                        <p className="text-legal text-gray-60 mt-3 max-w-225">
                            Stocks and prediction markets not available in your jurisdiction.
                        </p>
                    </div>

                    {/* Right: CTA */}
                    <div className="w-full md:w-1/2 md:flex-[0_0_50%]">
                        <h1 className="text-display-1 text-gray-100 mb-4">
                            The future of finance is here.
                        </h1>
                        <p className="text-body text-gray-60 mb-8">
                            Trade crypto and more on a platform you can trust.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-lg" onSubmit={handleSubmit}>
                            <div className="flex-1">
                                <Input
                                    placeholder="satoshi@nakamoto.com"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <Button variant="primary" size="md" type="submit">
                                Sign up
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
