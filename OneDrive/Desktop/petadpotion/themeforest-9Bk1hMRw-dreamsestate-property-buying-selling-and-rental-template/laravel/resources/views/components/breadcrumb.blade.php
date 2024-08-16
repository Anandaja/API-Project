 <!-- Breadcrumb -->
 <div class="breadcrumb">
    <div class="container">
        <div class="bread-crumb-head">
            <div class="breadcrumb-title">
                <h2>{{ $title }}</h2>
            </div>
            <div class="breadcrumb-list">
                <ul>
                    <li><a href="{{url('index')}}">{{ $li_1 }} </a></li>
                    <li>{{ $li_2 }}</li>
                </ul>
            </div>
        </div>
        <div class="breadcrumb-border-img">
            <img src="{{URL::asset('assets/img/bg/line-bg.png')}}" alt="Line Image">
        </div>
    </div>
</div>
<!-- Breadcrumb -->