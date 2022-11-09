<script setup>
import moment from 'moment';

const { findOne } = useStrapi();
const {
    data:
    { attributes:
        { header, report_date, report_groups:
            {
                data: reportGroups
            }
        }
    }
} = await findOne('report-tables', '1', {
    populate: {
        report_groups: {
            populate: {
                report_group: true,
                report_entries: {
                    populate: {
                        report_entry: true
                    }
                }
            }
        }
    }
});

const reportDisplayDate = moment(report_date).format('MM/DD/YYYY, ddd')
</script>

<template>
    <div class="place-items-center h-screen" id="wholesale">
        <div role="main" class="grid pb-36">
            <div class="mx-8 max-w-[75%]" id="wholesale-wrap">
                <div class="grid" id="wholesale-border">
                    <header class="grid-cols-2">
                        <div>
                            <h2>Daily Fresh Fish Report</h2>
                        </div>

                        <div id="wholesale-header-right">
                            <p class="wholesale-date">
                                Date: {{ reportDisplayDate }}
                                <br />
                                Phone Orders: 503-286-5950
                            </p>
                            <br />
                            <p class='wholesale-date'>
                                {{ header }}
                            </p>

                        </div>
                    </header>
                    <br data-clear="all" />
                    <FishReportTable :reportGroups="reportGroups" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>