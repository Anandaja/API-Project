<?php $page = 'faq'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            FAQ
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            FAQ
        @endslot
    @endcomponent

    <!-- FAQ  -->
    <section class="faq-section bg-white section">
        <div class="container">
            <div class="faq-info">
                <div class="faq-card bg-white aos" data-aos="fade-down">
                    <h4 class="faq-title">
                        <a class="collapsed" data-bs-toggle="collapse" href="#faqOne" aria-expanded="false">1. What are the
                            costs to buy a house?</a>
                    </h4>
                    <div id="faqOne" class="card-collapse collapse">
                        <div class="faq-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div class="faq-card bg-white aos" data-aos="fade-down">
                    <h4 class="faq-title">
                        <a class="collapsed" data-bs-toggle="collapse" href="#faqTwo" aria-expanded="false">2. What are the
                            steps to sell a house?</a>
                    </h4>
                    <div id="faqTwo" class="card-collapse collapse">
                        <div class="faq-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div class="faq-card bg-white aos" data-aos="fade-down">
                    <h4 class="faq-title">
                        <a class="collapsed" data-bs-toggle="collapse" href="#faqThree" aria-expanded="false">3. Do you have
                            loan consultants?</a>
                    </h4>
                    <div id="faqThree" class="card-collapse collapse">
                        <div class="faq-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div class="faq-card bg-white aos" data-aos="fade-down">
                    <h4 class="faq-title">
                        <a class="collapsed" data-bs-toggle="collapse" href="#faqFour" aria-expanded="false">4. When will
                            the project be completed?</a>
                    </h4>
                    <div id="faqFour" class="card-collapse collapse">
                        <div class="faq-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div class="faq-card bg-white aos" data-aos="fade-down">
                    <h4 class="faq-title">
                        <a class="collapsed" data-bs-toggle="collapse" href="#faqFive" aria-expanded="false">5. When will
                            the project be completed?</a>
                    </h4>
                    <div id="faqFive" class="card-collapse collapse">
                        <div class="faq-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div class="faq-card bg-white aos" data-aos="fade-down">
                    <h4 class="faq-title">
                        <a class="collapsed" data-bs-toggle="collapse" href="#faqSix" aria-expanded="false">6. Lorem ipsum
                            dolor sit amet, elit?</a>
                    </h4>
                    <div id="faqSix" class="card-collapse collapse">
                        <div class="faq-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div class="faq-card bg-white aos" data-aos="fade-down">
                    <h4 class="faq-title">
                        <a class="collapsed" data-bs-toggle="collapse" href="#faqSeven" aria-expanded="false">7. Lorem ipsum
                            dolor sit amet, elit?</a>
                    </h4>
                    <div id="faqSeven" class="card-collapse collapse">
                        <div class="faq-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div class="faq-card bg-white aos" data-aos="fade-down">
                    <h4 class="faq-title">
                        <a class="collapsed" data-bs-toggle="collapse" href="#faqEight" aria-expanded="false">8. Lorem ipsum
                            dolor sit amet, elit?</a>
                    </h4>
                    <div id="faqEight" class="card-collapse collapse">
                        <div class="faq-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div class="faq-card bg-white aos" data-aos="fade-down">
                    <h4 class="faq-title">
                        <a class="collapsed" data-bs-toggle="collapse" href="#faqNine" aria-expanded="false">9. Lorem ipsum
                            dolor sit amet, elit?</a>
                    </h4>
                    <div id="faqNine" class="card-collapse collapse">
                        <div class="faq-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div class="faq-card bg-white aos" data-aos="fade-down">
                    <h4 class="faq-title">
                        <a class="collapsed" data-bs-toggle="collapse" href="#faqTen" aria-expanded="false">10. Lorem ipsum
                            dolor sit amet, elit?</a>
                    </h4>
                    <div id="faqTen" class="card-collapse collapse">
                        <div class="faq-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /FAQ -->
@endsection
