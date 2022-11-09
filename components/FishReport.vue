<template>
    <div id="wholesale">
        <div id="content" role="main" class="clearfix">
            <div id="wholesale-wrap">
                <div id="wholesale-border">
                    <header class="clearfix">
                        <h2>Daily Fresh Fish Report</h2>
                        <div id="wholesale-header-right">
                            <p class="wholesale-date">
                                Date: {reportDisplayDate}
                                <br />
                                Phone Orders: 503-286-5950
                            </p>
                            <br />
                            <p class='wholesale-date'>
                                {header}
                            </p>

                        </div>
                    </header>
                    <br data-clear="all" />
                    <FishReportTable report_groups={report_groups} />
                </div>
            </div>
        </div>
    </div>
</template>