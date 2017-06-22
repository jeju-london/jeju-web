<script id="depth1Li" type="text/x-jsrender">
    <a href="#"><strong>{{:region}}</strong><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></a>
</script>

<script id="regionMarker" type="text/x-jsrender">
    <div onclick="showDetailOnRegion(this);" data-region="{{:name}}" data-regioneng={{:nameEng}} data-xcoord="{{:centerCoord.x}}" data-ycoord="{{:centerCoord.y}}" class="region-marker wrap-marker" style="float:left" >
        <span class="bs-glyphicons">
            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
        </span>
        <div class="maker-label" style="color:{{:fontColor}}"><span class="center">{{:name}}</span></div>

    </div>
</script>

<script id="emdMarker" type="text/x-jsrender">
    <div onclick="showDetailOnEmd(this);" data-region="{{:name}}" data-xcoord="{{:y}}" data-ycoord="{{:x}}" data-wx='{{:w_x}}' data-wy='{{:w_y}}' class="wrap-marker emd-wrap" style="float:left" data-toggle="modal" data-target=".bs-example-modal-lg">
        <span class="bs-glyphicons">
            <span class="glyphicon glyphicon-map-marker emd-marker" aria-hidden="true"></span>
        </span>
        <div class="maker-label emd-label" style="color:{{:fontColor}}"><span class="center">{{:name}}</span></div>

    </div>
</script>

<script id="graphModal" type="text/x-jsrender">
    <div class="modal-content">
        <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            <h4 class="modal-title">{{:region}}</h4>
        </div>
        <div class="modal-body">

            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                 <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="http://postfiles14.naver.net/20140719_61/jejusarangi_14057728133598Wtyt_JPEG/DSC03959.jpg?type=w2" alt="...">
                        <div class="carousel-caption">

                        </div>
                    </div>
                    <div class="item">
                        <img src="http://postfiles5.naver.net/20140719_244/jejusarangi_1405772816428Oof7p_JPEG/DSC03971.jpg?type=w2" alt="...">
                        <div class="carousel-caption">

                        </div>
                    </div>
                    <div class="item">
                        <img src="http://postfiles13.naver.net/20140719_60/jejusarangi_1405772819007SIh6K_JPEG/DSC04621.jpg?type=w2" alt="...">
                        <div class="carousel-caption">

                        </div>
                    </div>
                </div>

                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>



            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> 경기 시간표
                            </a>
                        </h4>
                    </div>
                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div class="panel-body">
                        <div class="container">
                            <div class="row">
                                <div class='col-sm-6'>
                                    <div class="form-group">
                                        <div class='input-group date' id='datetimepicker1'>
                                            <input type='text' class="form-control" value='{{:date}}' />
                                            <span class="input-group-addon">
                                                <span class="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>시간</th>
                                        <th>가격</th>
                                        <th>예약팀</th>
                                        <th>예약 가능 여부</th>
                                        <th>날씨</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">6~8시</th>
                                        <td>22,000</td>
                                        <td>{{:schedule[0].reserved_team}}</td>
                                        <td>
                                            {{if schedule[0].reserved_yn === "y"}}
                                            <button type="button" class="btn btn-primary btn-xs">
                                                예약 가능
                                            </button>
                                            {{else}}
                                            <button type="button" class="btn btn-danger btn-xs">
                                                예약 완료
                                            </button>
                                            {{/if}}
                                        </td>
                                        <td>
<div class="btn-group" style="position:relative;top:0px;left:0px">
    <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
{{if weather.sky[0].fcstValue == 1}}
맑음
{{else weather.sky[0].fcstValue == 2}}
구름
{{else weather.sky[0].fcstValue == 3}}
구름많음
{{else weather.sky[0].fcstValue == 4}}
흐림
{{else}}
-
{{/if}} <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
    <li><a href="#">강수확률: {{:weather.pop[0].fcstValue}}%</a></li>
    <li><a href="#">습도: {{:weather.reh[0].fcstValue}}%</a></li>
    <li><a href="#">온도: {{:weather.t3h[0].fcstValue}}℃</a></li>
    <li><a href="#">풍속: {{:weather.wsd[0].fcstValue}}m/s</a></li>
</ul>
</div>
                                        </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">8~10시</th>
                                    <td>22,000</td>
                                    <td>{{:schedule[1].reserved_team}}</td>
                                    <td>
                                        {{if schedule[1].reserved_yn === "y"}}
                                        <button type="button" class="btn btn-primary btn-xs">
                                            예약 가능
                                        </button>
                                        {{else}}
                                        <button type="button" class="btn btn-danger btn-xs">
                                            예약 완료
                                        </button>
                                        {{/if}}
                                    </td>
                                    <td>
<div class="btn-group" style="position:relative;top:0px;left:0px">
    <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
    {{if weather.sky[0].fcstValue == 1}}
    맑음
    {{else weather.sky[0].fcstValue == 2}}
    구름
    {{else weather.sky[0].fcstValue == 3}}
    구름많음
    {{else weather.sky[0].fcstValue == 4}}
    흐림
    {{else}}
    -
    {{/if}}
<span class="caret"></span>
</button>
<ul class="dropdown-menu" role="menu">
    <li><a href="#">강수확률: {{:weather.pop[0].fcstValue}}%</a></li>
<li><a href="#">습도: {{:weather.reh[0].fcstValue}}%</a></li>
<li><a href="#">온도: {{:weather.t3h[0].fcstValue}}℃</a></li>
<li><a href="#">풍속: {{:weather.wsd[0].fcstValue}}m/s</a></li>
</ul>
</div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">10~12시</th>
                                    <td>22,000</td>
                                    <td>{{:schedule[2].reserved_team}}</td>
                                    <td>
                                        {{if schedule[2].reserved_yn === "y"}}
                                        <button type="button" class="btn btn-primary btn-xs">
                                            예약 가능
                                        </button>
                                        {{else}}
                                        <button type="button" class="btn btn-danger btn-xs">
                                            예약 완료
                                        </button>
                                        {{/if}}
                                    </td>
                                    <td>
    <div class="btn-group" style="position:relative;top:0px;left:0px">
        <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
        {{if weather.sky[1].fcstValue == 1}}
    맑음
    {{else weather.sky[1].fcstValue == 2}}
    구름
    {{else weather.sky[1].fcstValue == 3}}
    구름많음
    {{else weather.sky[1].fcstValue == 4}}
    흐림
    {{else}}
    -
        {{/if}}
<span class="caret"></span>
</button>
    <ul class="dropdown-menu" role="menu">
        <li><a href="#">강수확률: {{:weather.pop[1].fcstValue}}%</a></li>
    <li><a href="#">습도: {{:weather.reh[1].fcstValue}}%</a></li>
    <li><a href="#">온도: {{:weather.t3h[1].fcstValue}}℃</a></li>
    <li><a href="#">풍속: {{:weather.wsd[1].fcstValue}}m/s</a></li>
    </ul>
    </div>

</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">12~14시</th>
                                    <td>22,000</td>
                                    <td>{{:schedule[3].reserved_team}}</td>
                                    <td>
                                        {{if schedule[3].reserved_yn === "y"}}
                                        <button type="button" class="btn btn-primary btn-xs">
                                            예약 가능
                                        </button>
                                        {{else}}
                                        <button type="button" class="btn btn-danger btn-xs">
                                            예약 완료
                                        </button>
                                        {{/if}}
                                    </td>
                                    <td>
    <div class="btn-group" style="position:relative;top:0px;left:0px">
        <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
        {{if weather.sky[2].fcstValue == 1}}
    맑음
    {{else weather.sky[2].fcstValue == 2}}
    구름
    {{else weather.sky[2].fcstValue == 3}}
    구름많음
    {{else weather.sky[2].fcstValue == 4}}
    흐림
    {{else}}
    -
        {{/if}}
<span class="caret"></span>
</button>
    <ul class="dropdown-menu" role="menu">
        <li><a href="#">강수확률: {{:weather.pop[2].fcstValue}}%</a></li>
    <li><a href="#">습도: {{:weather.reh[2].fcstValue}}%</a></li>
    <li><a href="#">온도: {{:weather.t3h[2].fcstValue}}℃</a></li>
    <li><a href="#">풍속: {{:weather.wsd[2].fcstValue}}m/s</a></li>
    </ul>
    </div>

                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">14~16시</th>
                                    <td>22,000</td>
                                    <td>{{:schedule[4].reserved_team}}</td>
                                    <td>
                                        {{if schedule[4].reserved_yn === "y"}}
                                        <button type="button" class="btn btn-primary btn-xs">
                                            예약 가능
                                        </button>
                                        {{else}}
                                        <button type="button" class="btn btn-danger btn-xs">
                                            예약 완료
                                        </button>
                                        {{/if}}
                                    </td>
                                    <td>
    <div class="btn-group" style="position:relative;top:0px;left:0px">
        <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
        {{if weather.sky[3].fcstValue == 1}}
    맑음
    {{else weather.sky[3].fcstValue == 2}}
    구름
    {{else weather.sky[3].fcstValue == 3}}
    구름많음
    {{else weather.sky[3].fcstValue == 4}}
    흐림
    {{else}}
    -
        {{/if}}
<span class="caret"></span>
</button>
    <ul class="dropdown-menu" role="menu">
        <li><a href="#">강수확률: {{:weather.pop[3].fcstValue}}%</a></li>
    <li><a href="#">습도: {{:weather.reh[3].fcstValue}}%</a></li>
    <li><a href="#">온도: {{:weather.t3h[3].fcstValue}}℃</a></li>
    <li><a href="#">풍속: {{:weather.wsd[3].fcstValue}}m/s</a></li>
    </ul>
    </div>

                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">16~18시</th>
                                    <td>22,000</td>
                                    <td>{{:schedule[5].reserved_team}}</td>
                                    <td>
                                        {{if schedule[5].reserved_yn === "y"}}
                                        <button type="button" class="btn btn-primary btn-xs">
                                            예약 가능
                                        </button>
                                        {{else}}
                                        <button type="button" class="btn btn-danger btn-xs">
                                            예약 완료
                                        </button>
                                        {{/if}}
                                    </td>
                                    <td>
    <div class="btn-group" style="position:relative;top:0px;left:0px">
        <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
        {{if weather.sky[3].fcstValue == 1}}
    맑음
    {{else weather.sky[3].fcstValue == 2}}
    구름
    {{else weather.sky[3].fcstValue == 3}}
    구름많음
    {{else weather.sky[3].fcstValue == 4}}
    흐림
    {{else}}
    -
        {{/if}}
<span class="caret"></span>
</button>
    <ul class="dropdown-menu" role="menu">
        <li><a href="#">강수확률: {{:weather.pop[3].fcstValue}}%</a></li>
    <li><a href="#">습도: {{:weather.reh[3].fcstValue}}%</a></li>
    <li><a href="#">온도: {{:weather.t3h[3].fcstValue}}℃</a></li>
    <li><a href="#">풍속: {{:weather.wsd[3].fcstValue}}m/s</a></li>
    </ul>
    </div>

                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">18~20시</th>
                                    <td>22,000</td>
                                    <td>{{:schedule[6].reserved_team}}</td>
                                    <td>
                                        {{if schedule[6].reserved_yn === "y"}}
                                        <button type="button" class="btn btn-primary btn-xs">
                                            예약 가능
                                        </button>
                                        {{else}}
                                        <button type="button" class="btn btn-danger btn-xs">
                                            예약 완료
                                        </button>
                                        {{/if}}
                                    </td>
                                    <td>
    <div class="btn-group" style="position:relative;top:0px;left:0px">
        <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
        {{if weather.sky[4].fcstValue == 1}}
    맑음
    {{else weather.sky[4].fcstValue == 2}}
    구름
    {{else weather.sky[4].fcstValue == 3}}
    구름많음
    {{else weather.sky[4].fcstValue == 4}}
    흐림
    {{else}}
    -
        {{/if}}
<span class="caret"></span>
</button>
    <ul class="dropdown-menu" role="menu">
        <li><a href="#">강수확률: {{:weather.pop[4].fcstValue}}%</a></li>
    <li><a href="#">습도: {{:weather.reh[4].fcstValue}}%</a></li>
    <li><a href="#">온도: {{:weather.t3h[4].fcstValue}}℃</a></li>
    <li><a href="#">풍속: {{:weather.wsd[4].fcstValue}}m/s</a></li>
    </ul>
    </div>

                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> 식음료 구입
                        </a>
                    </h4>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">물 1.5L x 6</span>
                                    <input type="text" class="form-control hide" aria-label="6병">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">물 500mL x 12</span>
                                    <input type="text" class="form-control hide" aria-label="...">
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">얼음물 1.5L x 6</span>
                                    <input type="text" class="form-control hide" aria-label="6병">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">얼음물 500mL x 12</span>
                                    <input type="text" class="form-control hide" aria-label="...">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">게토레이 1.5L x 3</span>
                                    <input type="text" class="form-control hide" aria-label="6병">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">포카리스웨트 1.5L x 3</span>
                                    <input type="text" class="form-control hide" aria-label="...">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">바나나 1송이</span>
                                    <input type="text" class="form-control hide" aria-label="6병">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">시리얼바 12개</span>
                                    <input type="text" class="form-control hide" aria-label="...">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title">
                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <span class="glyphicon glyphicon-send" aria-hidden="true"></span> 축구용품 대여
                        </a>
                    </h4>
                </div>
                <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">축구공</span>
                                    <input type="text" class="form-control hide" aria-label="6병">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">조끼</span>
                                    <input type="text" class="form-control hide" aria-label="...">
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">콘</span>
                                    <input type="text" class="form-control hide" aria-label="6병">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">바</span>
                                    <input type="text" class="form-control hide" aria-label="...">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">작전판</span>
                                    <input type="text" class="form-control hide" aria-label="6병">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingFour">
                    <h4 class="panel-title">
                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <span class="glyphicon glyphicon-facetime-video" aria-hidden="true"></span> 영상 촬영
                        </a>
                    </h4>
                </div>
                <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                    <div class="panel-body">

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">드론 촬영</span>
                                    <input type="text" class="form-control hide" aria-label="6병">
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="input-group">
                                    <span class="input-group-addon chkbox">
                                        <input type="checkbox" aria-label="...">
                                    </span>
                                    <span class="input-group-addon" id="basic-addon1">고프로 쵤영</span>
                                    <input type="text" class="form-control hide" aria-label="...">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingFive">
                    <h4 class="panel-title">
                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 게스트 수용가능 인원
                        </a>
                    </h4>
                </div>
            <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                <div class="panel-body">

                    <div class="input-group">
                    <input type="text" class="form-control" placeholder="0" aria-describedby="basic-addon2">
                    <span class="input-group-addon" id="basic-addon2">명</span>
                    </div>

                    <div class="alert alert-warning" role="alert" style="margin-top:10px;margin-bottom:0px">
                        축구 인원이 더 필요한 경우, 새로운 게스트와 같이 축구를 하고 싶은 경우 추가해주세요.
                    </div>


                </div>
            </div>
        </div>

        </div>


        <button type="button" class="btn btn-success btn-lg payment" style="float:left" data-toggle="button" aria-pressed="false"   autocomplete="off" data-toggle="modal" data-target=".bs-example-modal-sm">
            <span class="glyphicon glyphicon-star" aria-hidden="true"></span> 결제하기
        </button>
        <h3 style="text-align:right;margin-top:25px;margin-bottom:25px;"><span class="amount">0</span><span class="label label-default">원</span></h3>


    <div class="progress hide">
    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
    <span class="sr-only">40% Complete (success)</span>
    </div>
    </div>

    </div>
</script>


<script id="guestModal" type="text/x-jsrender">
    <div class="modal-content">
        <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
            <h4 class="modal-title">{{:region}}</h4>
        </div>
        <div class="modal-body">

            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="http://postfiles14.naver.net/20140719_61/jejusarangi_14057728133598Wtyt_JPEG/DSC03959.jpg?type=w2" alt="...">
                        <div class="carousel-caption">

                        </div>
                    </div>
                    <div class="item">
                        <img src="http://postfiles5.naver.net/20140719_244/jejusarangi_1405772816428Oof7p_JPEG/DSC03971.jpg?type=w2" alt="...">
                        <div class="carousel-caption">

                        </div>
                    </div>
                    <div class="item">
                        <img src="http://postfiles13.naver.net/20140719_60/jejusarangi_1405772819007SIh6K_JPEG/DSC04621.jpg?type=w2" alt="...">
                        <div class="carousel-caption">

                        </div>
                    </div>
                </div>

                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>



            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span> 경기 시간표
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body">
                            <div class="container">
                                <div class="row">
                                    <div class='col-sm-6'>
                                        <div class="form-group">
                                            <div class='input-group date' id='datetimepicker1'>
                                                <input type='text' class="form-control" value='{{:date}}' />
                                                <span class="input-group-addon">
                                                <span class="glyphicon glyphicon-calendar"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>시간</th>
                                            <th>예약팀</th>
                                            <th>참가가능 인원</th>
                                            <th>참가신청</th>
                                            <th>날씨</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">6~8시</th>
                                            <td>{{:schedule[0].reserved_team}}</td>
                                            <td>{{:schedule[0].total_guest-schedule[0].current_guest}}</td>
                                            <td>
                                                {{if schedule[0].total_guest-schedule[0].current_guest > 0}}
                                                <button type="button" class="btn btn-primary btn-xs">
                                                참가 가능
                                            </button> {{else}}
                                                <button type="button" class="btn btn-danger btn-xs">
                                                참가 불가
                                            </button> {{/if}}
                                            </td>
                                            <td>
    <div class="btn-group" style="position:relative;top:0px;left:0px">
        <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
        {{if weather.sky[0].fcstValue == 1}}
    맑음
    {{else weather.sky[0].fcstValue == 2}}
    구름
    {{else weather.sky[0].fcstValue == 3}}
    구름많음
    {{else weather.sky[0].fcstValue == 4}}
    흐림
    {{else}}
    -
        {{/if}} <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
        <li><a href="#">강수확률: {{:weather.pop[0].fcstValue}}%</a></li>
    <li><a href="#">습도: {{:weather.reh[0].fcstValue}}%</a></li>
    <li><a href="#">온도: {{:weather.t3h[0].fcstValue}}℃</a></li>
    <li><a href="#">풍속: {{:weather.wsd[0].fcstValue}}m/s</a></li>
    </ul>
    </div>

                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8~10시</th>
                                            <td>{{:schedule[1].reserved_team}}</td>
                                            <td>{{:schedule[1].total_guest-schedule[1].current_guest}}</td>
                                            <td>
                                                {{if schedule[1].total_guest-schedule[1].current_guest > 0}}
                                                <button type="button" class="btn btn-primary btn-xs">
                                                참가 가능
                                        </button> {{else}}
                                                <button type="button" class="btn btn-danger btn-xs">
                                                참가 불가
                                        </button> {{/if}}
                                            </td>
                                            <td>
        <div class="btn-group" style="position:relative;top:0px;left:0px">
            <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
            {{if weather.sky[0].fcstValue == 1}}
        맑음
        {{else weather.sky[0].fcstValue == 2}}
        구름
        {{else weather.sky[0].fcstValue == 3}}
        구름많음
        {{else weather.sky[0].fcstValue == 4}}
        흐림
        {{else}}
        -
            {{/if}} <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu">
            <li><a href="#">강수확률: {{:weather.pop[0].fcstValue}}%</a></li>
        <li><a href="#">습도: {{:weather.reh[0].fcstValue}}%</a></li>
        <li><a href="#">온도: {{:weather.t3h[0].fcstValue}}℃</a></li>
        <li><a href="#">풍속: {{:weather.wsd[0].fcstValue}}m/s</a></li>
        </ul>
        </div>
        </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10~12시</th>
                                            <td>{{:schedule[2].reserved_team}}</td>
                                            <td>{{:schedule[2].total_guest-schedule[2].current_guest}}</td>
                                            <td>
                                                {{if schedule[2].total_guest-schedule[2].current_guest > 0}}
                                                <button type="button" class="btn btn-primary btn-xs">
                                            참가 가능
                                        </button> {{else}}
                                                <button type="button" class="btn btn-danger btn-xs">
                                            참가 불가
                                        </button> {{/if}}
                                            </td>
                                            <td>
        <div class="btn-group" style="position:relative;top:0px;left:0px">
            <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
            {{if weather.sky[1].fcstValue == 1}}
        맑음
        {{else weather.sky[1].fcstValue == 2}}
        구름
        {{else weather.sky[1].fcstValue == 3}}
        구름많음
        {{else weather.sky[1].fcstValue == 4}}
        흐림
        {{else}}
        -
            {{/if}} <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu">
            <li><a href="#">강수확률: {{:weather.pop[1].fcstValue}}%</a></li>
        <li><a href="#">습도: {{:weather.reh[1].fcstValue}}%</a></li>
        <li><a href="#">온도: {{:weather.t3h[1].fcstValue}}℃</a></li>
        <li><a href="#">풍속: {{:weather.wsd[1].fcstValue}}m/s</a></li>
        </ul>
        </div>
        </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">12~14시</th>
                                            <td>{{:schedule[3].reserved_team}}</td>
                                            <td>{{:schedule[3].total_guest-schedule[3].current_guest}}</td>
                                            <td>
                                                {{if schedule[3].total_guest-schedule[3].current_guest > 0}}
                                                <button type="button" class="btn btn-primary btn-xs">
                                            참가 가능
                                        </button> {{else}}
                                                <button type="button" class="btn btn-danger btn-xs">
                                            참가 불가
                                        </button> {{/if}}
                                            </td>
                                            <td>
                <div class="btn-group" style="position:relative;top:0px;left:0px">
                    <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                    {{if weather.sky[2].fcstValue == 1}}
                맑음
                {{else weather.sky[2].fcstValue == 2}}
                구름
                {{else weather.sky[2].fcstValue == 3}}
                구름많음
                {{else weather.sky[2].fcstValue == 4}}
                흐림
                {{else}}
                -
                    {{/if}} <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="#">강수확률: {{:weather.pop[2].fcstValue}}%</a></li>
                <li><a href="#">습도: {{:weather.reh[2].fcstValue}}%</a></li>
                <li><a href="#">온도: {{:weather.t3h[2].fcstValue}}℃</a></li>
                <li><a href="#">풍속: {{:weather.wsd[2].fcstValue}}m/s</a></li>
                </ul>
                </div>
                </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">14~16시</th>
                                            <td>{{:schedule[4].reserved_team}}</td>
                                            <td>{{:schedule[4].total_guest-schedule[4].current_guest}}</td>
                                            <td>
                                                {{if schedule[4].total_guest-schedule[4].current_guest > 0}}
                                                <button type="button" class="btn btn-primary btn-xs">
                                            참가 가능
                                        </button> {{else}}
                                                <button type="button" class="btn btn-danger btn-xs">
                                            참가 불가
                                        </button> {{/if}}
                                            </td>
                                            <td>
                    <div class="btn-group" style="position:relative;top:0px;left:0px">
                        <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                        {{if weather.sky[3].fcstValue == 1}}
                    맑음
                    {{else weather.sky[3].fcstValue == 2}}
                    구름
                    {{else weather.sky[3].fcstValue == 3}}
                    구름많음
                    {{else weather.sky[3].fcstValue == 4}}
                    흐림
                    {{else}}
                    -
                        {{/if}} <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">강수확률: {{:weather.pop[3].fcstValue}}%</a></li>
                    <li><a href="#">습도: {{:weather.reh[3].fcstValue}}%</a></li>
                    <li><a href="#">온도: {{:weather.t3h[3].fcstValue}}℃</a></li>
                    <li><a href="#">풍속: {{:weather.wsd[3].fcstValue}}m/s</a></li>
                    </ul>
                    </div>
                    </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">16~18시</th>
                                            <td>{{:schedule[5].reserved_team}}</td>
                                            <td>{{:schedule[5].total_guest-schedule[5].current_guest}}</td>
                                            <td>
                                                {{if schedule[5].total_guest-schedule[5].current_guest > 0}}
                                                <button type="button" class="btn btn-primary btn-xs">
                                            참가 가능
                                        </button> {{else}}
                                                <button type="button" class="btn btn-danger btn-xs">
                                            참가 불가
                                        </button> {{/if}}
                                            </td>
                                            <td>

                        <div class="btn-group" style="position:relative;top:0px;left:0px">
                            <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                            {{if weather.sky[4].fcstValue == 1}}
                        맑음
                        {{else weather.sky[4].fcstValue == 2}}
                        구름
                        {{else weather.sky[4].fcstValue == 3}}
                        구름많음
                        {{else weather.sky[4].fcstValue == 4}}
                        흐림
                        {{else}}
                        -
                            {{/if}} <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">강수확률: {{:weather.pop[4].fcstValue}}%</a></li>
                        <li><a href="#">습도: {{:weather.reh[4].fcstValue}}%</a></li>
                        <li><a href="#">온도: {{:weather.t3h[4].fcstValue}}℃</a></li>
                        <li><a href="#">풍속: {{:weather.wsd[4].fcstValue}}m/s</a></li>
                        </ul>
                        </div>
                        </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">18~20시</th>
                                            <td>{{:schedule[6].reserved_team}}</td>
                                            <td>{{:schedule[6].total_guest-schedule[6].current_guest}}</td>
                                            <td>
                                                {{if schedule[6].total_guest-schedule[6].current_guest > 0}}
                                                <button type="button" class="btn btn-primary btn-xs">
                                            참가 가능
                                        </button> {{else}}
                                                <button type="button" class="btn btn-danger btn-xs">
                                            참가 불가
                                        </button> {{/if}}
                                            </td>
                                            <td>
                            <div class="btn-group" style="position:relative;top:0px;left:0px">
                                <button type="button" class="btn btn-info dropdown-toggle btn-xs" data-toggle="dropdown" aria-expanded="false">
                                {{if weather.sky[4].fcstValue == 1}}
                            맑음
                            {{else weather.sky[4].fcstValue == 2}}
                            구름
                            {{else weather.sky[4].fcstValue == 3}}
                            구름많음
                            {{else weather.sky[4].fcstValue == 4}}
                            흐림
                            {{else}}
                            -
                                {{/if}} <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">강수확률: {{:weather.pop[4].fcstValue}}%</a></li>
                            <li><a href="#">습도: {{:weather.reh[4].fcstValue}}%</a></li>
                            <li><a href="#">온도: {{:weather.t3h[4].fcstValue}}℃</a></li>
                            <li><a href="#">풍속: {{:weather.wsd[4].fcstValue}}m/s</a></li>
                            </ul>
                            </div>
                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
              </div>




            <button type="button" class="btn btn-success btn-lg payment" style="margin-bottom:10px;" data-toggle="button" aria-pressed="false" autocomplete="off" data-toggle="modal" data-target=".bs-example-modal-sm">
            <span class="glyphicon glyphicon-star" aria-hidden="true"></span> 참가신청
        </button>



            <div class="progress hide">
                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
                    <span class="sr-only">40% Complete (success)</span>
                </div>
            </div>

        </div>
</script>
